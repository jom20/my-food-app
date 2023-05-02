import ChiefCard from "./ChiefCard"

export default function ChiefsSection(){
    const chiefs = [
        {
            name: "Melvin E. Gamana",
            img: "/img/top-chiefs/img_1.jpg",
            recipesCount: "10",
            cuisine: "Filipino",
        },
        {
            name: "Jomalyn N. Enriquez",
            img: "/img/top-chiefs/img_2.jpg",
            recipesCount: "05",
            cuisine: "Filipino",
        },
        {
            name: "Marverick Bastes",
            img: "/img/top-chiefs/img_3.jpg",
            recipesCount: "13",
            cuisine: "Filipino",
        },
        {
            name: "Jillou Quillopee",
            img: "/img/top-chiefs/img_4.jpg",
            recipesCount: "08",
            cuisine: "Filipino"
        },
        {
            name: "Alexis Sagusay",
            img: "/img/top-chiefs/img_5.jpg",
            recipesCount: "09",
            cuisine: "Filipino"
        },
        {
            name: "Jonalyn N. Enriquez",
            img: "/img/top-chiefs/img_6.jpg",
            recipesCount: "04",
            cuisine: "Filipino"
        }
    ]
    return (
        <div className="section chiefs">
            <h1 className="title">My Top Chiefs</h1>
            <div className="top-chiefs-container">
                {/* <ChiefCard />
                <ChiefCard />
                <ChiefCard />
                <ChiefCard />
                <ChiefCard />
                <ChiefCard /> */}
                { chiefs.map(chief => <ChiefCard key={chief.name} chief={chief} />) }
            </div>
        </div>
    )
}