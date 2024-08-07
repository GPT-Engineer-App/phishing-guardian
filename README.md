# Welcome to your GPT Engineer project

## Project info

**Project**: phishing-guardian 

**URL**: https://run.gptengineer.app/projects/f6374e2b-27fb-4706-9d15-ba6419648c11/improve

**Description**:  Phishing Simulation Web Application




#### Overview
This web application is designed to help organizations conduct phishing simulations and educate their employees on information security. The application allows companies to create and manage phishing campaigns, analyze results, and generate reports with recommendations. The system supports multi-user and multi-client accounts, meaning it can handle multiple sub-accounts for different clients.




#### Key Features




1. **Client Accounts and Sub-Accounts**
   - **Super Admin**:
     - Creation and management of client accounts.
     - Management of campaign templates and sender profiles (SMTP, etc.).
   - **Clients**:
     - Each client has their own account, which contains their employees.
     - Import of employees via Active Directory (AD) synchronization.
     - Setup and management of campaigns.




2. **Campaign Setup**
   - **Campaign Elements**:
     - Email: Design and send phishing emails.
     - Landing Page: A fake webpage that mimics a legitimate site where employees are tricked into providing information.
     - Awareness Page: An educational page that employees are redirected to if they provide information on the landing page.
   - **Campaign Management**:
     - Scheduling and timing of campaign sends.
     - Customization of campaign content and layout.
     - **Template Customization**: Clients can customize email and landing page templates to suit their specific needs.




3. **Reporting**
   - **Real-time Tracking**:
     - Number of emails sent.
     - Number of emails opened.
     - Number of links clicked.
     - Number of employees who provided information.
   - **Report Generation**:
     - Detailed reports on campaign results.
     - Recommendations based on results (e.g., additional training for those who were tricked).
     - Ability to export reports in various formats (PDF, Excel, etc.).




4. **Security and Data Handling**
   - **AD Synchronization**:
     - Secure synchronization with clients' Active Directory to import and update employee lists.
   - **Data Privacy**:
     - Secure handling and storage of employee information in compliance with GDPR and other relevant regulations.
   - **Access Control**:
     - Role management and access restrictions for Super Admin, clients, and employees.




5. **Usability**
   - **Dashboard**:
     - Intuitive dashboard for monitoring campaigns and viewing key metrics.
   - **Notifications**:
     - Automated notifications and reminders to users about important events and deadlines.
   - **Support and Help**:
     - Integrated support system and documentation to assist users in understanding and using the application effectively.




6. **Additional Features**
   - **Integration with Existing Security Systems**: Ability to integrate with other security solutions that the client may have.
   - **Multilingual Support**: Support for multiple languages to accommodate international clients.
   - **API Access**: Provide API access for clients who wish to integrate the application with their own systems.




#### Technical Requirements




- **Backend**: Use a robust and scalable backend framework such as Node.js, Django, or Ruby on Rails.
- **Frontend**: Use a modern frontend framework such as React, Angular, or Vue.js.
- **Database**: Use a reliable database solution such as PostgreSQL, MySQL, or MongoDB.
- **Authentication**: Implement secure authentication mechanisms, including support for OAuth and SAML.
- **Hosting**: Deploy the application on a scalable cloud platform such as AWS, Azure, or Google Cloud.
- **CI/CD**: Set up continuous integration and continuous deployment pipelines to ensure smooth development and deployment processes.
 

## Who is the owner of this repository?
By default, GPT Engineer projects are created with public GitHub repositories.

However, you can easily transfer the repository to your own GitHub account by navigating to your [GPT Engineer project](https://run.gptengineer.app/projects/f6374e2b-27fb-4706-9d15-ba6419648c11/improve) and selecting Settings -> GitHub. 

## How can I edit this code?
There are several ways of editing your application.

**Use GPT Engineer**

Simply visit the GPT Engineer project at [GPT Engineer](https://run.gptengineer.app/projects/f6374e2b-27fb-4706-9d15-ba6419648c11/improve) and start prompting.

Changes made via gptengineer.app will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in the GPT Engineer UI.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps: 

```sh
git clone https://github.com/GPT-Engineer-App/phishing-guardian.git
cd phishing-guardian
npm i

# This will run a dev server with auto reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with .

- Vite
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

All GPT Engineer projects can be deployed directly via the GPT Engineer app. 

Simply visit your project at [GPT Engineer](https://run.gptengineer.app/projects/f6374e2b-27fb-4706-9d15-ba6419648c11/improve) and click on Share -> Publish.

## I want to use a custom domain - is that possible?

We don't support custom domains (yet). If you want to deploy your project under your own domain, then we recommend GitHub Pages.

To use GitHub Pages you will need to follow these steps: 
- Deploy your project using GitHub Pages - instructions [here](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site#creating-your-site)
- Configure a custom domain for your GitHub Pages site - instructions [here](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)