FROM mcr.microsoft.com/playwright:v1.37.1-jammy

RUN npx playwright install --with-deps chromium
RUN npx playwright install --with-deps firefox
RUN npx playwright install --with-deps webkit

USER pwuser
WORKDIR /e2e

COPY --chown=pwuser:pwuser package*.json /e2e/
RUN npm install

COPY --chown=pwuser:pwuser . /e2e/