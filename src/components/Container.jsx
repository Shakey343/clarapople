import cn from '../../utils/cn';

const Container = ({ className, children }) => {
  return <div className={cn('mx-auto max-w-screen mx-6 lg:px-10', className)}>{children}</div>;
};

export default Container;
