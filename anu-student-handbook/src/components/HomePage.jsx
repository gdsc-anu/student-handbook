import Header from "./Header";
import Nav from "./Nav";
import Article from "./Article";


export default function HomePage() {
  

    return(
        <main className="flex ">
            <Header/>
            <div className="flex flex-col w-3/4">
                <Nav/>
                <Article/>
            </div>
        </main>
    )
}