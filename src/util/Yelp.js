const apiKey = 'bc6iIPIUx5mzGa1-pEi4e6MpuXxN2DnUVcVrA17lf3Y7ZCzQFOJnSHBouAQh7NVxCaoFWiQMelsiQFXGJsbMqggbvNlMjSfAUi78vi5gapC2RLTdLhTQP9g6IGC5XnYx';
const yelp = {
    searchYelp(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
            {
                headers: {
                    Authorization: `Bearer ${apiKey}`
                }
            }).then(response => { return response.json() }).
            then(jsonResponse => {
                if (jsonResponse.businesses) {
                    return jsonResponse.businesses.map(business => {
                        console.log(business);
                        return {
                            id: business.id,
                            imageSrc: business.image_url,
                            name: business.name,
                            address: business.location.address1,
                            city: business.location.city,
                            state: business.location.state,
                            zipCode: business.location.zipCode,
                            category: business.categories[0].title,
                            rating: business.rating,
                            reviewCount: business.reviewCount
                        }
                    });
                }
            });
    }
};

export default yelp;