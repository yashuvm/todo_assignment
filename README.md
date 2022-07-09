# todo_assignment

# Clone the assignment:- git clone https://github.com/yashuvm/todo_assignment.git

# After clone the project run :- npm install

# After install node modules run :- npm start

---I Share the postman collections also 

# In this task i make two models authTokenSchema and todoSchema.authTokenSchema is used for jsonwebtoken authentication and when we run the project a dumy user is created only once.

# I create crud api for todo but for access that api firstly you have to call get token api and put into your headers then you have to access to call crud api

# Api Information

# 1:- Get token api : In this api the email and password is fixed for getting token

      email:"admin@gmail.com"
      password:"admin@12345"

      Url : localhost:9090/api/v1/get/token
      Method : POST
      Body parameter : {
         "email":"admin@gmail.com",
         "password":"admin@12345"
        }

    After call this api you got token used that token in todo crud api in headers - Authorization Bearer <token>
--------------------
# 1:- Create Todo

      Url : localhost:9090/api/v1/todos/create
      Method : POST
      Headers: { Authorization : Bearer <token> }
      Body parameter : {
        "studentName":"Rohit",
        "studentAddress":"Gurgaon",
        "studentMobile":"0911111111"
       }

# 2:- Get Todo

      Url : localhost:9090/api/v1/todos/get
      Method : GET
      Headers: { Authorization : Bearer <token> }
      
# 3:- Update Todo

      Url : localhost:9090/api/v1/todos/update/:id
      Method : PUT
      Headers: { Authorization : Bearer <token> }
      Body parameter : {
        "studentName":"Mohit",
        "studentAddress":"Delhi",
        "studentMobile":"0911111112"
       }
      
 # 4:- Delete Todo

      Url : localhost:9090/api/v1/todos/delete/:id
      Method : DELETE
      Headers: { Authorization : Bearer <token> }     