// components/SimpleFooter.js
const SimpleFooter = () => {
  return (
    <footer className="bg-gray-200 text-center py-4">
      <p className="text-gray-600">© {new Date().getFullYear()}</p>
    </footer>
  );
};

export default SimpleFooter;
