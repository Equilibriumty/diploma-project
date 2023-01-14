import { useNavigate } from 'react-router-dom';

function Auth() {
  const navigate = useNavigate();
  const handleNavigateToMain = () => {
    navigate('/main');
  };

  return (
    <>
      <div>Auth page</div>
      <button
        data-testid="redirect"
        type="button"
        onClick={handleNavigateToMain}
      >
        Back to main
      </button>
    </>
  );
}

export default Auth;
