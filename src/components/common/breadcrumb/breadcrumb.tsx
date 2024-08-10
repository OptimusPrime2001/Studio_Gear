import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@components/ui/breadcrumb';
import { uniqueId } from '@lib/utils';
import { useStore } from '@mobx/store';
import { observer } from 'mobx-react-lite';
import Link from 'next/link';
import styles from './breadcrumb.module.scss';

type BreadcrumbPathProps = object;

const BreadcrumbPath: React.FC<BreadcrumbPathProps> = observer(() => {
  const { breadcrumb } = useStore();
  const length = breadcrumb.breadcrumbList.length;
  return (
    <Breadcrumb className={styles.breadcrumbWrapper}>
      <BreadcrumbList>
        {breadcrumb.breadcrumbList.map((br, index) =>
          index !== length - 1 ? (
            <React.Fragment key={uniqueId()}>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href={br.href}>{br.name}</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
            </React.Fragment>
          ) : (
            <BreadcrumbItem key={uniqueId()}>
              <BreadcrumbPage className='text-neutral_07'>{br.name}</BreadcrumbPage>
            </BreadcrumbItem>
          )
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
});

export default BreadcrumbPath;
