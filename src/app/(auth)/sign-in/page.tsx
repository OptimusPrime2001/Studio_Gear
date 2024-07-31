'use client';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Logo from '@components/common/logo/logo';
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
    message: 'Vui lòng điền tên người dùng hoặc email'
  }),
  password: z
    .string()
    .min(1, { message: 'Vui lòng điền mật khẩu' })
    .regex(new RegExp('.*[A-Z].*'), 'Mật khẩu phải có ít nhất 1 kí tự viết hoa')
    .regex(new RegExp('.*[a-z].*'), 'Mật khẩu phải có ít nhất 1 kí tự viết thường')
    .regex(new RegExp('.*\\d.*'), 'Mật khẩu phải có ít nhất 1 kí tự số')
    .regex(new RegExp('.*[`~<>?,./!@#$%^&*()\\-_+="\'|{}\\[\\];:\\\\].*'), 'Mật khẩu phải có ít nhất 1 kí tự đặc biệt')
    .min(8, 'Mật khẩu phải tối thiểu 8 kí tự'),
  rememberAccount: z.boolean().refine(val => val === true, {
    message: 'Vui lòng đồng ý điều khoản và chính sách'
  })
});
const SignInPage: React.FC = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      password: '',
      rememberAccount: false
    }
  });
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = form;
  const handleSignIn: SubmitHandler<z.infer<typeof formSchema>> = data => console.log(data);
  return (
    <section className={styles.signInPageWrapper}>
      <div className='sign-background text-primary_light'>
        <Logo className='!text-2xl' />
      </div>
      <div className='sign-form'>
        <h2 className={cn('sign-form_title', poppins.className)}>Đăng nhập</h2>
        <div className='flex w-full gap-x-2'>
          <span className='sign-form_question'>Bạn chưa có tài khoản ?</span>
          <Link className='sign-form_link' href='sign-up'>
            Đăng ký
          </Link>
        </div>
        <Form {...form}>
          <form onSubmit={handleSubmit(handleSignIn)}>
            <FormField
              name='username'
              control={control}
              render={({ field }) => <Input {...field} type='email' placeholder='Tên tài khoản hoặc địa chỉ email' />}
            />
            {errors.username && <span className='error-message'>{errors.username?.message}</span>}
            <FormField
              name='password'
              control={control}
              rules={{ required: 'Vui lòng không bỏ trống mật khẩu' }}
              render={({ field }) => <Input {...field} type='password' placeholder='Mật khẩu' />}
            />
            {errors.password && <span className='error-message'>{errors.password?.message}</span>}
            <div className='form-remember mt-8 flex items-center'>
              <FormField
                name='rememberAccount'
                control={control}
                rules={{ required: 'Vui lòng đồng ý điều khoản và chính sách' }}
                render={({ field }) => (
                  <FormItem className='flex items-center gap-x-2'>
                    <FormControl>
                      <Checkbox checked={field.value} onCheckedChange={field.onChange} id='terms' />
                    </FormControl>
                    <label htmlFor='terms' className='!mt-0 text-sm font-medium leading-none'>
                      Ghi nhớ tài khoản
                    </label>
                  </FormItem>
                )}
              />

              <Link href='/forgot-password' className='flex-1 text-end'>
                Quên mật khẩu ?
              </Link>
            </div>
            {errors.rememberAccount && <span className='error-message'>{errors.rememberAccount?.message}</span>}
            <Button className='button-submit' type='submit'>
              Đăng nhập
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default SignInPage;
