import React, {ReactNode} from 'react';

export interface CaptionProps {
  /**
   * Caption content
   */
  content?: string;
  children: ReactNode;
}

export const Caption = ({
  content,
  children
}: CaptionProps): JSX.Element => {
  return (
    <div className={'text o-caption u-color--gray u-font--secondary--s'}>
      {content || children}
    </div>
  );
};
