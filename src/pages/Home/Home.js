import { Link } from "react-router-dom"
import "./Home.css"

const Home = () => (
    <div className="container">
        <main className="content">
            <h1 className="title">Clearcode Frontend Academy</h1>
            <h2>Background story:</h2>
            <p>
                Klient (Rootsly) to nowa platforma społecznościowa skupiona wokół małych
                społeczności. Jednym z widoków, które wchodzą w skład MVP to lista
                „znajomych” na której wyświetlane są też zaproszenia. Z poziomu tego
                widoku użytkownik może akceptować lub odrzucać zaproszenia oraz usuwać z
                listy znajomych już zaakceptowane profile. Użytkownik może też filtrować
                listę po nazwie profilu.
            </p>
            <p>Twoim zadaniem będzie implementacja tego widoku.</p>
            <h2>Wymagania:</h2>
            <ul>
                <li>
                    Widok powinien być dostępny pod adresem&nbsp;
                    <Link to="/friends">/friends</Link>.
                </li>
                <li>Widok ostyluj zgodnie z projektem.</li>
                <li>
                    Widok powinien wyswietlać liste profili zaakceptowanych i tych, które
                    czekają na akceptacje.
                </li>
                <li>
                    Użytkownik powinien mieć możliwość zaakceptowania lub odrzucenia
                    zaproszenia.
                </li>
                <li>
                    Użytkownik powinien mieć możliwość usunięcia zaakceptowanego profilu
                    ze znajomych.
                </li>
                <li>
                    Odrzucenie zaproszenia lub usunięcie ze znajomych powinno skutkować
                    usunięciem profilu z listy
                </li>
                <li>
                    Użytkownik powinien mieć możliwośc wyszukiwania profili po imieniu i
                    nazwisku.
                </li>
            </ul>
            <h2>Założenia zadania:</h2>
            <ul>
                <li>
                    Widok został zaprojektowany w figmie i jest dostępny&nbsp;
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.figma.com/file/BBsVGSgu3YQwewZNks69sy/FE-ACADEMY-DESIGN?node-id=6%3A44"
                    >
                        TUTAJ
                    </a>
                    .
                </li>
                <li>
                    Do zasilenia widoku wykorzystaj metodę dostępną w &nbsp;
                    <code>services/friendsService</code>.
                </li>
                <li>
                    Zmiany w danych nie muszą być nigdzie zapisywane, mogą być lokalne.
                </li>
                <li>
                    Jeśli widzisz taką potrzebe możesz dodawać kolejne zależności do
                    projektu. Masz pełną dowolność. To samo dotyczy sposobu w jaki
                    będziesz chciał ostylować widok.
                </li>
                <li>
                    Nie wszystkie wymagania muszą zostać spełnione. Nie wykonanie ich
                    wszystkich nie wyklucza Twojego udziału w kolejnych etapach
                    rekrutacji. Pamiętaj jednak że im lepiej wykonane zadanie tym większe
                    masz szanse :))
                </li>
            </ul>
        </main>
    </div>
)

export default Home
