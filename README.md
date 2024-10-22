# Recipix
## Multimodal Food Recognition & Recipe Recommendation System

Recipix is a smart system designed to help reduce food waste by identifying ingredients in your fridge and suggesting recipes tailored to your dietary preferences. Using advanced **Computer Vision** and **Natural Language Processing (NLP)**, Recipix processes images of the inside of your refrigerator, detects available ingredients, and generates personalized recipe suggestions.

This repository contains the **public documentation**, **user guides**, and an overview of the **project architecture** for developers, researchers, and enthusiasts who are interested in how the system works.

## Key Features

- **Image Recognition**: Detects over 88 different food items from fridge images using a custom-trained image classification model based on **ResNet-50** and **Segment Anything Model (SAM)**.
- **Personalized Recipe Suggestions**: Uses **NLP** to match detected ingredients with a curated database of recipes. Generates recipes that align with user preferences, dietary restrictions, and food availability.
- **Telegram Bot Integration**: Interact with the system via a **Telegram bot**, which allows users to send images or input text and receive recipes directly.
- **User-Friendly Interface**: The platform includes both a web interface (powered by **FastAPI**) and a Telegram bot for seamless interaction.

## Project Structure

- **Documentation**: Detailed information on how Recipix works, including the architecture, models used, and an overview of the recommendation system.
- **Demos & Examples**: We provide sample input images and output recipes for you to see how Recipix analyzes fridge contents and suggests meals.
- **API Reference**: A detailed guide on how to interact with the Recipix API, which can be integrated with other systems.

## Technologies

- **Python** (TensorFlow, Keras, PyTorch, OpenCV)
- **Natural Language Processing** (SpaCy, NLTK, Word2Vec)
- **Telegram Bot API** (For user interaction)
- **FastAPI** (For backend API)
- **PostgreSQL** (Database for recipe and user data management)
- **Redis & Celery** (Task management for handling requests and processing images)
- **Docker** (For containerization)

## How It Works

1. **Image Processing**: Take a photo of your fridge or pantry, and Recipix uses image recognition to detect available ingredients.
2. **NLP Matching**: The detected ingredients are matched with a database of recipes based on your dietary preferences.
3. **Recipe Generation**: Recipix generates a personalized recipe in PDF format, which can be downloaded or shared.

## Getting Started

While this repository doesn’t include the source code, you can interact with the system through our **Telegram bot** or web interface. Check out our documentation for step-by-step instructions.

1. **Telegram Bot**: Visit [Recipix Bot](https://t.me/recipix_bot) to try it out.
2. **Web Interface**: Coming soon! The link will be added here once the web portal is live.

## Future Development

We are constantly working to improve Recipix. Planned features include:
- **Expanded Ingredient Recognition**: More food items will be added to the image recognition model.
- **Inventory Tracking**: Stay updated on what’s left in your fridge and when it’s time to restock.
- **Dietary Filters**: More advanced filtering for dietary preferences, including vegan, gluten-free, and more.

---

## Contributing

We welcome contributions to improve our documentation or suggest new features. If you have ideas or find any issues, feel free to open an issue or submit a pull request!

## Contact

For questions or inquiries, please reach out to the development team at:
- **Ivan Zepeda**: [roster-cursor-guts@duck.com](mailto:roster-cursor-guts@duck.com)
- **LinkedIn**: [https://www.linkedin.com/in/ijzepeda](https://www.linkedin.com/in/ijzepeda)

---

## License

This project is licensed under the Creative Commons Attribution-NonCommercial 4.0 International License.

### Additional Requirement

If you share, adapt, or build upon this work, you are required to:
1. **Give credit** to the original author.
2. **Notify** the original author by emailing at [roster-cursor-guts@duck.com] or by opening an issue in this repository.

For commercial use, please contact the author directly to request permission.

