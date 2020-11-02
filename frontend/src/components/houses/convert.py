import geopandas

shp_file = geopandas.read_file('statsnzterritorial-authority-2018-generalised-SHP')
shp_file.to_file('2018file.json', driver='GeoJSON')
