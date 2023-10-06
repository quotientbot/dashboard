build-backend:
	docker build -t "dashboard/backend" backend/

backend: build-backend
	docker run -it -p 8000:8000 --rm --name "dashboard-backend" "dashboard/backend"

