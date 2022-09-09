import useDocumentTitle from "../hooks/useDocumentTitle";

const DocumentTitle = () => {

  const title = 'welcome to our site';

  useDocumentTitle('whatever you like');
  
  // useEffect(() => {
  //   document.title = title;
  // }, [title]);
  
  return (
    <div>
      <h2>DocumentTitle component</h2>
    </div>
  );
};

export default DocumentTitle;
