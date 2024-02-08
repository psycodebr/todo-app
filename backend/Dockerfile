# Use a imagem oficial do Python como base
FROM python:3.9-slim

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents, into the container at /app
COPY . /app

# Install Flask
RUN pip install Flask

# Expose the port the app runs on
EXPOSE 5001

# Run the application
CMD ["python", "app.py"]
