import axios from "axios";

type Props = {
  email: string;
  password: string;
  birth_date: string;
  phone: string;
  name: string;
  productor: boolean;
  plan_id: string;
  favorite: any;
  dateCreated: string;
  userId: string;
};

export async function getFavorites(userId: string) {
  const response = await axios.get(
    `https://9947ccq2oj.execute-api.us-east-1.amazonaws.com/favorites/${userId}`
  );

  return response.data.favorite;
}

export async function putFavoritesAtAWS(data: Props, movie: any) {
  const favorites = getFavorites(data.userId);

  favorites.then((favorites) => {
    const oldFavorites = favorites;

    const newFavorites = {
      Nome: movie.title,
      id: movie.id,
      poster_path: movie.poster_path,
    };
    // // console.log(newFavorites);

    const newArrayToPut = [...oldFavorites, newFavorites];
    console.log("New array to put: ", newArrayToPut);

    axios
      .put(`https://9947ccq2oj.execute-api.us-east-1.amazonaws.com/favorites`, {
        birth_date: data.birth_date,
        dateCreated: data.dateCreated,
        email: data.email,
        favorite: newArrayToPut,
        name: data.name,
        password: data.password,
        phone: data.phone,
        plan_id: data.plan_id,
        productor: data.productor,
        userId: data.userId,
      })
      .then(() => console.log("Favoritos atualizado"))
      .catch((err) => console.log(err));
  });
}
