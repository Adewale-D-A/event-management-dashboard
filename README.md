# Event Management Dashboard

### <b>prerequisite</b>:

> TailwindCSS is used for the CSS styling, therefore, technical knowledge tailwindCSS library, React.JS and TypeScript are prerequisite to collaborate on this project.

 <table>
    <tr>
      <th>Package Name</th>
      <th>Use In App</th>
    </tr>
    <tr>
      <td>tailwindcss</td>
      <td>CSS styling library</td>
    </tr>
  </table>

#### How to build a docker image from the source code and run the app

##### follow the data in the table below provided you are in the same directory as the Dockerfile

 <table>
    <tr>
      <th>Task</th>
      <th>Docker command</th>
    </tr>
    <!-- <tr>
      <td>Build a docker image manually without docker compose</td>
      <td>docker build -t event-management-dashboard-app .</td>
    </tr> -->
    <!-- <tr>
      <td>Run the image locally manually</td>
      <td>docker run -p 3000:3000 event-management-dashboard-app</td>
    </tr> -->
    <tr>
      <td>Build a docker image using docker compose</td>
      <td>docker-compose build</td>
    </tr>
    <tr>
      <td>Run the image locally</td>
      <td>docker run -d -p 80:80 --name event-management-dashboard event-management-dashboard:v0.0.1</td>
    </tr>
    <tr>
      <td>tag Docker image</td>
      <td>docker tag event-management-dashboard:v0.0.1 adewaleda/event-management-dashboard:v0.0.1</td>
    </tr>
    <tr>
      <td>push to remote repository</td>
      <td>docker push adewaleda/event-management-dashboard:v0.0.1</td>
    </tr>
    <tr>
      <td>Pull image from DockerHub on server</td>
      <td>sudo docker pull adewaleda/event-management-dashboard:v0.0.1</td>
    </tr>
    <tr>
      <td>stop current running docker image</td>
      <td>sudo docker stop *Container ID*</td>
    </tr>
    <tr>
      <td>initiate pulled docker image on server</td>
      <td>sudo docker run -d -p 8081:80 --name event-management-dashboard-v0.0.1 *Image ID*</td>
    </tr>
    </table>

step 1:
run **npm install** (to install all the dependencies)
step 2:
run **npm start** (start application on port :3000)
