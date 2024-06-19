type ListingProps = {
	listing_id: number;
	url: string,
	MainImage: {
		url_570xN: string,
	}
	title: string,
	currency_code: string,
	price: string,
	quantity: number,
}

const Listing = ({listing_id, url, MainImage, title, currency_code, price, quantity }: ListingProps) => {
	const titleShort = title.length > 50 ? title.slice(0, 50) + '...' : title;
	const currentValute = currency_code === 'USD' ? '$' : currency_code === 'EUR' ? '€' : currency_code;
	const level = quantity <= 10 ? 'level-low' : quantity <= 20 ? 'level-medium' : 'level-high';
	
	return (
		
  <div className="item">
    <div className="item-image">
      <a href={url}>
        <img src={MainImage.url_570xN}/>
      </a>
    </div>
    <div className="item-details">
      <p className="item-title">{titleShort}</p>
      <p className="item-price">{currentValute} {price}</p>
      <p className={`item-quantity ${level}`}>{quantity} left</p>
    </div>
  </div>

	)
}

export default Listing;