'use client';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Logo from '@components/common/logo/logo';
import EyeIcon from '@components/icons/eye';
import { Button } from '@components/ui/button';
import { Checkbox } from '@components/ui/checkbox';
import { Form, FormControl, FormField, FormItem } from '@components/ui/form';
import { Input } from '@components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { poppins } from '@lib/fonts';
import { cn } from '@lib/utils';
import Link from 'next/link';
import { z } from 'zod';
import styles from './page.module.scss';

const formSchema = z.object({
  username: z.string().min(1, {
    message: 'Vui lòng điền tên người dùng'
  }),
  email: z
    .string()
    .min(1, {
      message: 'Vui lòng điền email'
    })
    .email({ message: 'Vui lòng nhập địa chỉ email hợp lệ' })
    .regex(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/),
  password: z
    .string()
    .min(1, { message: 'Vui lòng điền mật khẩu' })
    .regex(new RegExp('.*[A-Z].*'), 'Mật khẩu phải có ít nhất 1 kí tự viết hoa')
    .regex(new RegExp('.*[a-z].*'), 'Mật khẩu phải có ít nhất 1 kí tự viết thường')
    .regex(new RegExp('.*\\d.*'), 'Mật khẩu phải có ít nhất 1 kí tự số')
    .regex(new RegExp('.*[`~<>?,./!@#$%^&*()\\-_+="\'|{}\\[\\];:\\\\].*'), 'Mật khẩu phải có ít nhất 1 kí tự đặc biệt')
    .min(8, 'Mật khẩu phải tối thiểu 8 kí tự'),
  agreepolicy: z.boolean().refine(val => val === true, {
    message: 'Vui lòng đồng ý điều khoản và chính sách'
  })
});
const SignUpPage: React.FC = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
      agreepolicy: false
    }
  });
  const {
    control,
    handleSubmit,
    trigger,
    formState: { errors }
  } = form;

  const handleSignUp: SubmitHandler<z.infer<typeof formSchema>> = async data => {
    const usernameValid = await trigger('username');
    if (!usernameValid) return;
    console.log('data', data);
  };
  return (
    <section className={styles.signUpPageWrapper}>
      <div className='sign-background text-primary_light'>
        <Logo className='!text-2xl' />
      </div>
      <div className='sign-form'>
        <h2 className={cn('sign-form_title', poppins.className)}>Đăng ký</h2>
        <div className='flex w-full gap-x-2'>
          <span className='sign-form_question'>Bạn đã có tài khoản ?</span>
          <Link className='sign-form_link' href='sign-in'>
            Đăng nhập
          </Link>
        </div>
        <Form {...form}>
          <form onSubmit={handleSubmit(handleSignUp)}>
            <FormField
              name='username'
              control={control}
              render={({ field }) => <Input {...field} placeholder={'Tên người dùng'} />}
            />
            {errors.username && <span className='error-message'>{errors.username?.message}</span>}
            <FormField
              name='email'
              control={control}
              render={({ field }) => <Input {...field} type='email' placeholder={'Địa chỉ email'} />}
            />
            {errors.email && <span className='error-message'>{errors.email?.message}</span>}
            <FormField
              name='password'
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  autoComplete='on'
                  icon={<EyeIcon className='absolute right-0 top-0 cursor-pointer' />}
                  type='password'
                  placeholder={'Mật khẩu'}
                />
              )}
            />
            {errors.password && <span className='error-message'>{errors.password?.message}</span>}

            <div className='mt-8 flex items-center space-x-2'>
              <FormField
                name='agreepolicy'
                control={control}
                rules={{ required: 'Vui lòng đồng ý điều khoản và chính sách' }}
                render={({ field }) => (
                  <FormItem className='flex flex-col'>
                    <div className='privacy_security flex items-center gap-x-2'>
                      <FormControl>
                        <Checkbox checked={field.value} onCheckedChange={field.onChange} id='terms' />
                      </FormControl>
                      <label
                        htmlFor='terms'
                        className='dark:text-primaryflex flex flex-wrap gap-x-2 text-base font-normal text-[#E8ECEF]'
                      >
                        Tôi đồng ý với
                        <Link href='term-of-use' className='text-primary_dark dark:!text-primary_light'>
                          Điều khoản sử dụng
                        </Link>
                        và
                        <Link href='privacy-policy' className='text-primary_dark dark:!text-primary_light'>
                          Chính sách bảo mật
                        </Link>
                      </label>
                    </div>
                    {!errors.username && !errors.email && !errors.password && errors.agreepolicy && (
                      <span className='error-message'>{errors.agreepolicy?.message}</span>
                    )}
                  </FormItem>
                )}
              />
            </div>
            <Button className='button-submit' type='submit'>
              Đăng ký
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default SignUpPage;
