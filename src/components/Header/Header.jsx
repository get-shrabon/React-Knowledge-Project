import Profile from "../../assets/images/profile.png"
const Header = () => {
    return (
      <div className="py-3 container mx-auto flex justify-between items-center border-b-2 mb-5">
        <a className="text-3xl font-bold" href="#">Knowledge Cafe</a>
        <img src={Profile} alt="" />
      </div>
    );
};

export default Header;