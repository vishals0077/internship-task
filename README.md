1.	Begin by downloading & installing python 3. Run "python --version" in CMD to check if it is installed without any errors.
2.	The backend is Django and hence we need to install it. Run "pip install django" in CMD and then run "django-admin --version" to verify.
3.	Head to the "server" folder.
4.	The API requests are made using django rest framework and hence we need to install it .Run "pip install djangorestframework" in CMD.
5.	The API calls will run in the browser if CORS headers are present. hence we run "python -m pip install django-cors-headers" in CMD to install them.
6.	now that the 3rd party requirements are satisfied run "python manage.py runserver" to start the server. This will then run the server at http://localhost:8000 .
7.	Now we move to the "courseapp" folder to install dependencies for the frontend.
8.	The repository has static files and hence we must run "npm install" in CMD to install the dependencies.
9.	Now run "npm run dev" in CMD to start the development server on http://localhost:3000

