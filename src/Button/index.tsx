import React from 'react';
import classnames from "classnames";
import LoadingIcon from "./LoadingIcon";
import { tuple } from "../../types";
import "./index.less";

const prefixCls = "shuang-btn";

const ButtonTypes = tuple("default", "primary", "warning", "error", "link");

type ButtonType = typeof ButtonTypes[number];
type SizeType = "small" | "middle" | "large";

function isUnborderedButtonType (type: ButtonType | undefined) {
  return type === "link";
}

export interface IBaseButtonProps {
  type?: ButtonType;
  children?: React.ReactNode;
  className?: string;
  size?: SizeType;
  loading?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
  ghost?: boolean;
  onClick?: React.MouseEventHandler<HTMLElement>;
};

export default (
  {
    type,
    children,
    className,
    size = "middle",
    loading = false,
    disabled = false,
    icon,
    onClick,
    ghost = false,
    ...rest
  }: IBaseButtonProps
) => {
  const [innerLoading, setLoading] = React.useState<Boolean>(loading);
  const sizeClassNameMap = { large: 'lg', small: 'sm', middle: undefined };
  const sizeCls = size ? sizeClassNameMap[size] || '' : '';
  const classes = classnames(prefixCls,
    {
      [`${prefixCls}-${type}`]: type,
      [`${prefixCls}-${sizeCls}`]: sizeCls,
      [`${prefixCls}-loading`]: innerLoading,
      [`${prefixCls}-background-ghost`]: ghost && !isUnborderedButtonType(type)
    },
    className,
  );

  const iconNode = icon && !innerLoading ? icon : <LoadingIcon existIcon={!!icon} prefixCls={prefixCls} loading={!!innerLoading} />;

  const handleClick = function (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) {
    if (innerLoading || disabled) {
      e.preventDefault();
      return;
    }

    (onClick as React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>)?.(e);
  }

  return (
    <button
     className={classes}
     {...rest}
     onClick={handleClick}
    > 
      {iconNode}
      {children}
    </button>
  )
};
