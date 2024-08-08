import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@components/ui/breadcrumb';
import { observer } from 'mobx-react-lite';
import Link from 'next/link';
import styles from './breadcrumb.module.scss';

type BreadcrumbPathProps = {};

const BreadcrumbPath: React.FC<BreadcrumbPathProps> = observer(({ breadcrumb }) => {
  console.log('🚀 ~ breadcrumb:', breadcrumb);
  const length = breadcrumb.breadcrumbList.length;
  return (
    <Breadcrumb className={styles.breadcrumbWrapper}>
      <BreadcrumbList>
        {breadcrumb.breadcrumbList.map((br, index) =>
          index !== length - 1 ? (
            <>
              <BreadcrumbItem key={br.href}>
                <BreadcrumbLink asChild>
                  <Link href={br.href}>{br.name}</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
            </>
          ) : (
            <BreadcrumbItem key={br.href}>
              <BreadcrumbPage className='text-neutral_07'>{br.name}</BreadcrumbPage>
            </BreadcrumbItem>
          )
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
});

export default BreadcrumbPath;
