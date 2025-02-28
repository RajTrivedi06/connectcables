# Connect Cables Website

Welcome to the Connect Cables website project! This guide will walk you through setting up your programming environment from scratch—even if you have no coding experience. Follow these simple steps to get your website running on your computer.

---

## Table of Contents

1. [What You Need](#what-you-need)
2. [Step 1: Install Node.js and npm](#step-1-install-nodejs-and-npm)
3. [Step 2: Download a Code Editor](#step-2-download-a-code-editor)
4. [Step 3: Download the Project Files](#step-3-download-the-project-files)
5. [Step 4: Open a Terminal and Navigate to the Project Folder](#step-4-open-a-terminal-and-navigate-to-the-project-folder)
6. [Step 5: Install Project Dependencies](#step-5-install-project-dependencies)
7. [Step 6: Run the Project](#step-6-run-the-project)
8. [Step 7: View Your Website](#step-7-view-your-website)
9. [Troubleshooting](#troubleshooting)
10. [Need Help?](#need-help)

---

## What You Need

Before you start, you will need:

- A computer (Windows or Mac)
- Internet access
- A web browser (Chrome, Firefox, or Edge)

---

## Step 1: Install Node.js and npm

**Node.js** is the software that lets your computer run JavaScript programs. **npm** is a tool that comes with Node.js and helps install additional software (called packages) needed for this project.

1. **Visit the Node.js website:**

   - Go to [https://nodejs.org](https://nodejs.org)

2. **Download the LTS version:**

   - Click the button that says "LTS" (Long Term Support). This version is the most stable.

3. **Install Node.js:**
   - Open the downloaded file and follow the on-screen instructions to install Node.js.
   - To check if it installed correctly:
     - Open a terminal (or Command Prompt on Windows) and type:
       ```
       node -v
       ```
       You should see a version number (for example, v18.x.x).
     - Then type:
       ```
       npm -v
       ```
       You should see a version number as well.

---

## Step 2: Download a Code Editor

A code editor is a program that makes it easier to view and edit your project files.

- **Recommended: Visual Studio Code (VS Code)**
  1. Visit [https://code.visualstudio.com](https://code.visualstudio.com)
  2. Download and install VS Code by following the instructions on the website.

---

## Step 3: Download the Project Files

You need to get the project files for the Connect Cables website.

- If you have received a ZIP file:

  1. Download the ZIP file.
  2. Extract (unzip) the contents to a folder on your computer (for example, on your Desktop, name the folder `connectcable-frontend`).

- If you have a link to a Git repository (GitHub, GitLab, etc.):
  1. You may need to install Git. Visit [https://git-scm.com](https://git-scm.com) and follow the instructions.
  2. Then open a terminal, navigate to the folder where you want to download the project, and run:
     ```
     git clone <repository-url>
     ```
  3. Replace `<repository-url>` with the URL provided.

---

## Step 4: Open a Terminal and Navigate to the Project Folder

1. **Open the Terminal:**

   - On Mac: Open the "Terminal" application (found in Applications > Utilities).
   - On Windows: Open "Command Prompt" or "PowerShell".

2. **Navigate to the Project Folder:**
   - If your project is on your Desktop in a folder called `connectcable-frontend`, type:
     ```
     cd ~/Desktop/connectcable-frontend
     ```
     (On Windows, the command might be something like: `cd C:\Users\YourName\Desktop\connectcable-frontend`)

---

## Step 5: Install Project Dependencies

This project uses many packages (small programs) that make it work. You need to install them all.

1. In your terminal, make sure you are inside the project folder.
2. Type the following command and press Enter:

````

npm install

```
3. Wait for the installation to complete. This may take a few minutes.

---

## Step 6: Run the Project

Now that everything is installed, you can run the website locally on your computer.

1. In the terminal, type:
```

npm run dev

```
2. You should see messages that say something like "Vite dev server running" and a local URL (for example, `http://localhost:5173`).

---

## Step 7: View Your Website

1. Open your web browser.
2. Type the URL provided by the terminal (for example, `http://localhost:5173`) into the address bar.
3. Press Enter. You should now see the Connect Cables website with its styling and content.

---

## Troubleshooting

- **Nothing happens after typing `npm run dev`:**
Make sure you have installed Node.js and that you ran `npm install` inside the project folder.

- **Errors in the terminal:**
Read the error messages. They usually tell you what’s wrong. If you see messages about missing packages, try running `npm install` again.

- **Changes not showing in the browser:**
Sometimes the browser caches an older version. Try refreshing the page (press `Ctrl+F5` on Windows or `Cmd+Shift+R` on Mac).

---

## Need Help?

If you run into any issues or have questions, please contact the project maintainer or refer to online resources like [Stack Overflow](https://stackoverflow.com) or the [Vite documentation](https://vitejs.dev).



````
