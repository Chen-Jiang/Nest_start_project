import json

all_data = []

with open('fix_area.json', 'r') as file:

    data = json.load(file)
    # print(data['features'], type(data['features']))

    # data['features'] is a list

    for ele in data['features']: ## ele is every single record in one line, put fixed ele in the single_record
        # print("new:")
        # for k,v in ele.items(): # k includes type, geometry and properties
            # print(k,':',v)
        single_record = {}
        single_record['type'] = ele['type']
        geo = {}
        geo['type'] = ele['geometry']['type']
        coors = ele['geometry']['coordinates'] # get the coordinates list
        if ele['geometry']['type'] == 'Polygon':
            l1 = []
            l2 = []
            for item in coors[0]:
                lon = item[0]/100000
                lat = item[1]/100000
                l2.append([lon,lat])
            l1.append(l2)
            geo['coordinates'] = l1
            single_record['geometry'] = geo
        elif ele['geometry']['type'] == 'MultiPolygon':
            l1 = []

            # print("0:", coors)
            for item in coors:
                l2 = []
                l3 = []
                # print("item:", item)
                for element in item:
                    # print("element:", element)
                    for li in element:
                        lon = li[0]/100000
                        lat = li[1]/100000
                        l3.append([lon,lat])
                    l2.append(l3)
                l1.append(l2)
            # print("l1:",l1)
            geo['coordinates'] = l1
            single_record['geometry'] = geo

        single_record['properties'] = ele['properties']
        # print("single:", single_record)
        all_data.append(single_record)
        # print("all:", all_data, len(all_data))
        # print('hahahah')
    # print("all:", all_data)

file.close()

with open('fix111.json','w') as out:
    json.dump(all_data, out)
    out.close()




# {'features': [{},{},{}]}
