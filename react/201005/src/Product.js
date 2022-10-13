import { useParams, useLocation, useSearchParams, useNavigate } from 'react-router-dom';
function Product() {
    const { id } = useParams();
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();
    // const id1 = useParams().id -> 새로운 변수에 피라미터 값을 담을 때 사용

    const navigate = useNavigate(); // Navigate 는 함수로 사용 가능
    return (
        <div>
            <h1>{id}번 Product</h1>

            <ul>
                <li>hash : {location.hash}</li>
                <li>pathnames : {location.pathname}</li> {/* 경로 */}
                <li>searchs : {location.search}</li> {/*  */}
                <li>state : {location.state}</li> {/* 상태 값 */}
                <li>key : {location.key}</li> {/* location 객체의 고유 값 / 페이지 고유 값 */}
            </ul>

            <ul>
                <li>keyWords : {searchParams}</li> {/* get 으로 가져옴 */}
                <li>keyWords : {searchParams.get("search")}</li>
            </ul>

            <ul>
                <li><button onClick={() => navigate(-2)}>Go 2 pages back</button></li>
                <li><button onClick={() => navigate(-1)}>Go back</button></li>
                <li><button onClick={() => navigate(1)}>Go 2 forward</button></li>
                <li><button onClick={() => navigate(2)}>Go 2 pages forward</button></li>
                <li><button onClick={() => navigate('/')}>Go Root</button></li>
                <li><button onClick={() => navigate('/', {state: 'a'})}>Go Root2</button></li>
                {/* navigate의 장점은 usestate의 값을 전달 할 수 있음 */}
            </ul>
        </div>
    );
}

export default Product;