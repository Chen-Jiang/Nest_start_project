import json

# f = open('area.json')
#
# data = json.load(f)
#
# n = 2
# m = 3
#
#
# for i in data['features']:
#     coordinates = []
#     coordinates = i['geometry']['coordinates'][0]
#     for co in coordinates:
#         lon = str(co[0])
#         p1 = lon.index('.')
#         lat = str(co[1])
#         p2 = lat.index('.')
#
#         lon1 = lon[0:p1] + lon[p1+1]
#         lat1 = lat[0:p2] + lat[p2+1]
#
#         lon2 = lon1[0:3] + '.' + lon1[3:]
#         lat2 = lat1[0:2] + '.' + lat1[2:]
#
#         print(lon2, lat2)
#
#
#
#
#         # print(p1, p2)
#     print(coordinates, type(coordinates))



with open('fix_area.json', 'r') as file:

    data = json.load(file)
    cors = []

    for i in data['features']:
        coordinates = []
        coordinates = i['geometry']['coordinates'][0]
        for co in coordinates:
            print('co:', co)
            lon = co[0]/10000
            lat = co[1]/100000
            print('new:', [lon,lat])
            new_co = [lon,lat]
            cors.append(new_co)
file.close()
