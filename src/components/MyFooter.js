import logo from "./../assets/images/klcodes-logo-primary.png";

const MyFooter = () => {
  return (
    <footer className="flex flex-row justify-center items-center py-4">
      <img src={logo} alt="klcodes Logo" className="w-8 mr-2" />
      <div>klcodes &copy; {2022}. All Rights Reserved</div>
    </footer>
  );
};

export default MyFooter;
