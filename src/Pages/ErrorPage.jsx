import { useNavigate } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import "../styles/ErrorPage.css";
const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <MainLayout>
      <div className="errorPage">
        <h1>Oops!</h1>
        <h3>Page Not Found</h3>
        <button className="lost-btn" onClick={() => navigate("/")}>
          RETURN HOME
        </button>
      </div>
    </MainLayout>
  );
};

export default ErrorPage;
