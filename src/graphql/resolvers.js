import movies from '../database/movies';
import users from '../database/users';

const resolvers = {
    Query: {
        movies: () => movies,
        movie: (_, { id }) => {
            return movies.filter(movie => movie.id === id)[0];
        },
        users: () => users
    },
    Mutation: {
        addMovie: (_, { name, rating }) => {
            // 영화 제목 중복 검사
            if (movies.find(movie => movie.name === name)) return null;

            // 데이터베이스에 추가
            const newMovie = {
                id: movies.length + 1,
                name,
                rating
            };
            movies.push(newMovie);
            return newMovie;
        },

        addUser: (_, { ID, password }) => {
            // 사용자 아이디 중복 검사
            if (users.find(user => user.ID === ID)) return null;

            // 데이터베이스에 추가
            const newUser = {
                id: users.length + 1,
                ID,
                password
            };
            users.push(newUser);
            return newUser;
        }
    }
};

export default resolvers;
