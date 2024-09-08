# Authentication
Here there's bit of the authentication stuff using JWT ! 

1. The user comes to your website (courses.com)
2. The user sends a request to `/signin` with their `username` and `password`
3. The user gets back a `token`(it's  basically the random string that is encoded with username's)
4. In every subsequent request, the user sends the token to identify it self to the backend.
   
