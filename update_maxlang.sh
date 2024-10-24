# Navigate to the appdata directory
cd /mnt/user/appdata/maxlang
# Stop the current container (if running)
docker stop maxlang
# Remove the existing container
docker rm maxlang
# Remove the existing image if required
docker rmi maxlang
# Load the new Docker image
docker load -i maxlang.tar
# Run the Docker container with the new image
docker run -d -p 1945:1945 --name maxlang maxlang
echo "maxlang updated successfully."