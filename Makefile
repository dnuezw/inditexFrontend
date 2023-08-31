build:
	docker compose build app

up:
	docker compose up app mockServer

down:
	docker compose down

test:
	docker compose run --rm app npm run test

test-one:
	docker compose run --rm app npm run test:watch $(ARGS)

check-types:
	docker compose run --rm app npm run check-types

lint-fix:
	docker compose run --rm app npm run lint:fix

format-write:
	docker compose run --rm app npm run format:write

before-commit:
	make check-types
	make format-write
	make lint-fix
	make test

e2e-build:
	docker compose build e2e

e2e-test:
	docker compose run --rm e2e npm run e2e