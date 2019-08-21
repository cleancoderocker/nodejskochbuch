FROM mongo

COPY primer-dataset.json /primer-dataset.json
CMD mongoimport --host mongodb --db reach-engine --collection example --type json --file /primer-dataset.json --jsonArray