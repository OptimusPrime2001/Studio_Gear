'use client';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Logo from '@components/common/logo/logo';
import { Button } from '@components/ui/button';
import { Checkbox } from '@components/ui/checkbox';
import { Form, FormField } from '@components/ui/form';
import { Input } from '@components/ui/input';
import { poppins } from '@lib/fonts';
import { cn } from '@lib/utils';
import Link from 'next/link';
import styles from './page.module.scss';

interface IFormSignIn {
  email: string;
  password: string;
}
const SignInPage: React.FC = () => {
  const form = useForm<IFormSignIn>();
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = form;
  const handleSignIn: SubmitHandler<IFormSignIn> = data => console.log(data);
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
            Đăng kí
          </Link>
        </div>
        <Form {...form}>
          <form onSubmit={handleSubmit(handleSignIn)}>
            <FormField
              name='email'
              control={control}
              rules={{ required: 'Vui lòng không bỏ trống email' }}
              render={({ field }) => (
                <Input
                  {...field}
                  type='email'
                  error-message={errors.email?.message ? 'true' : 'false'}
                  placeholder={errors.email?.message ?? 'Tên tài khoản hoặc địa chỉ email'}
                />
              )}
            />
            <FormField
              name='password'
              control={control}
              rules={{ required: 'Vui lòng không bỏ trống mật khẩu' }}
              render={({ field }) => (
                <Input
                  error-message={errors.password?.message ? 'true' : 'false'}
                  {...field}
                  type='password'
                  placeholder={errors.password?.message ?? 'Mật khẩu'}
                />
              )}
            />
            <div className='form-remember mt-8 flex items-center space-x-2'>
              <Checkbox id='terms' />
              <label
                htmlFor='terms'
                className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
              >
                Ghi nhớ tài khoản
              </label>
              <Link href='/forgot-password' className='flex-1 text-end'>
                Quên mật khẩu ?
              </Link>
            </div>
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
