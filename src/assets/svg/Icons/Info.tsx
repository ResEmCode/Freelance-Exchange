import { SvgIconProps, SvgIcon } from '../SvgIcon';

export const Info = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} className={props.className}>
      <path
        d='M24.3333 40.3333H29.6666V24.3333H24.3333V40.3333ZM26.9999 18.9999C27.7555 18.9999 28.3893 18.7439 28.9013 18.2319C29.4133 17.7199 29.6684 17.087 29.6666 16.3333C29.6648 15.5795 29.4088 14.9466 28.8986 14.4346C28.3884 13.9226 27.7555 13.6666 26.9999 13.6666C26.2444 13.6666 25.6115 13.9226 25.1013 14.4346C24.591 14.9466 24.335 15.5795 24.3333 16.3333C24.3315 17.087 24.5875 17.7208 25.1013 18.2346C25.615 18.7484 26.2479 19.0035 26.9999 18.9999ZM26.9999 53.6666C23.311 53.6666 19.8444 52.9661 16.5999 51.5653C13.3555 50.1644 10.5333 48.2648 8.13326 45.8666C5.73326 43.4684 3.8337 40.6461 2.43459 37.3999C1.03548 34.1537 0.335033 30.687 0.333255 26.9999C0.331478 23.3128 1.03192 19.8461 2.43459 16.5999C3.83726 13.3537 5.73681 10.5315 8.13326 8.13325C10.5297 5.73503 13.3519 3.83547 16.5999 2.43459C19.8479 1.0337 23.3146 0.333252 26.9999 0.333252C30.6853 0.333252 34.1519 1.0337 37.3999 2.43459C40.6479 3.83547 43.4701 5.73503 45.8666 8.13325C48.263 10.5315 50.1635 13.3537 51.5679 16.5999C52.9724 19.8461 53.6719 23.3128 53.6666 26.9999C53.6613 30.687 52.9608 34.1537 51.5653 37.3999C50.1697 40.6461 48.2701 43.4684 45.8666 45.8666C43.463 48.2648 40.6408 50.1653 37.3999 51.5679C34.159 52.9706 30.6924 53.6701 26.9999 53.6666Z'
        fill='#5AB468'
      />
    </SvgIcon>
  );
};