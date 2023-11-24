import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItem, setShowIndex, hideItem }) => {
    // console.log(data)    

    const handlClick = () => {

        if (showItem === true) {
            hideItem()
        } else {

            setShowIndex()
        };

    }

    return (
        <div className="py-2">
            {/* Accordian Title */}
            <div className="p-5 m-2  bg-slate-100 shadow-xl">
                <div className="font-extrabold flex justify-between cursor-pointer" onClick={handlClick}>
                    <span data-testid="accordionHeader" className="select-none">
                        {data.title} ({data.itemCards.length})
                    </span>
                    <span >{!showItem ? "🔽" : "🔼"}</span>
                </div>
                {/* Accordian Body */}
                {showItem && <ItemList items={data.itemCards} />}
            </div>
        </div>
    )
};

export default RestaurantCategory;