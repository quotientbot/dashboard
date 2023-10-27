build-frontend:
	docker build -t "dashboard/frontend" frontend/

frontend: build-frontend
	docker run -it -p 3000:3000 --rm --name "dashboard-frontend" "dashboard/frontend"

build-backend:
	docker build -t "dashboard/backend" backend/

backend: build-backend
	docker run -it -p 8080:8080 --rm --name "dashboard-backend" "dashboard/backend"