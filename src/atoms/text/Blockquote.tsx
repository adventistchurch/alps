import React from 'react';

export interface BlockquoteProps {
  /**
   * Set strong style for all content
   */
  isStrong?: boolean;
  /**
   * Blockquote content
   */
  content?: string;
  children?: React.ReactNode;
}

export const Blockquote = ({
  isStrong = false,
  content = 'Blockquote content',
  children
}: BlockquoteProps): JSX.Element => {
  const defaultClasses =
    'pullquote u-theme--border-color--darker--left u-theme--color--darker u-padding--right';

  return (
    <div className={'text'}>
      <blockquote
        className={
          `${defaultClasses} ${isStrong ? 'o-pullquote--strong' : 'u-border--left'}`}
      >
        {children || <p>{content}</p>}
      </blockquote>
    </div>
  );
};
