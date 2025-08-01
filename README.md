

# Kachi's Translator

A full-stack web application designed to provide real-time text translation between two languages using the Microsoft Translator service.

## Live Application

* Frontend: [kachis-translator.vercel.app](https://kachis-translator.vercel.app/)

---

## Overview

This application was created for academic purposes to demonstrate the practical use of language translation APIs and real-time data handling in modern web applications. Users can choose a source and target language, submit input text, and receive immediate translations powered by Microsoft’s neural translation technology.

---

## Technologies Used

* **Frontend**: React.js, Vite, Tailwind CSS, Native Fetch API
* **Backend**: Flask (Python), Flask-CORS
* **Translation**: Microsoft Azure Translator Text API

---

## Key Functionalities

* Instantaneous translation between user-selected languages
* Responsive user interface adaptable across devices
* Integrated error handling and loading indicators
* Deployed using Vercel (frontend) and Render (backend)
* Modular code structure for maintainability and scalability

---

## Running Locally

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

### Backend Setup

```bash
cd backend
python -m venv venv
source venv/bin/activate      # For Windows: venv\Scripts\activate
pip install -r requirements.txt
python app.py
```

Ensure you include a `.env` file in the `backend/` directory with the following variables:

```env
MICROSOFT_TRANSLATE_API_KEY=your_key_here
MICROSOFT_TRANSLATE_REGION=your_region_here
```

---

## API Documentation

**Endpoint:** `POST /translate`
**Payload Example:**

```json
{
  "source_lang": "en",
  "target_lang": "fr",
  "text": "Hello, world!"
}
```

**Expected Response:**

```json
{
  "translated_text": "Bonjour le monde!"
}
```

---

## Project Roles

* **Lead Developer**: Author and maintainer of the project
* **Instructor**: Evaluator and academic client
* **Cloud Provider**: Microsoft Azure (Translation services)
* **Target Audience**: Users needing bilingual text conversion
* **Future Contributors**: Developers interested in extending the project

---

## Licensing

This software is released under the MIT License. You may modify, distribute, and use the code freely with appropriate attribution.

---

## Reflection

This project emphasizes the importance of clear documentation throughout the software development lifecycle. It supports:

* Effective communication within teams
* Easier onboarding and handover processes
* Long-term maintainability
* Streamlined development workflows

