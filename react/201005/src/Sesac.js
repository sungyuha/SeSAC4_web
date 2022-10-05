import {useParams, useNavigate, useLocation, useSearchParams} from 'react-router-dom';

function Sesac() {
    const { name } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    return (
        <div>
            <h1>학생의 이름은 <span>{name}</span> 입니다.</h1>

            <h1> {searchParams != "" && <p>실제 이름은 {searchParams.get("name")}</p>} </h1>

            <ul>
                <li><button onClick={() => navigate(-1)}>이전페이지로</button></li>
            </ul>
        </div>
    );
}
  
  export default Sesac;