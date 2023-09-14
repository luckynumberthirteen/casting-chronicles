CREATE TABLE stations (
  id varchar 10 primary key,
  latitude real,
  longitude real,
  siteName varchar(40),
  state varchar(2)
);

CREATE TEMP TABLE temp_stations (
  station_id varchar(10),
  wmo_id varchar(10),
  latitude real,
  longitude real,
  elevation_m real,
  site varchar(40),
  state varchar(2),
  country varchar(2),
  site_type varchar(10),
  iata_id varchar(10),
  wmo_id2 varchar(10)
);


COPY stations(id, latitude, longitude, siteName, state)
FROM '/home/waterlinx/hackreactor/RFP2307/MVP/west_coast_weather_stations' DELIMITER ',' CSV HEADER
WHERE "site_type" = 'METAR';