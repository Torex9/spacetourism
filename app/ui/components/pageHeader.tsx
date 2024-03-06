interface PageHeaderProps {
  pageNumber: string;
  title: string;
}

const PageHeader = ({ pageNumber, title }: PageHeaderProps) => {
  return (
    <h2 className=" mb-9 w-full text-center md:text-left md:pl-5 md:mb-14 lg:mb-0 lg:ml-36 lg:pt-12">
      <span className="text-white/45 mr-4 font-barlow font-bold text-base tracking-wide_xl md:text-xl lg:text-3xl">
        {pageNumber}
      </span>
      <span className="tracking-wide_xl text-white text-base font-barlow md:text-xl lg:text-3xl">
        {title}
      </span>
    </h2>
  );
};

export default PageHeader;
