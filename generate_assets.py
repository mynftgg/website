import json
import os

# Put all the NFT assets in ./assets/ and name them <num>.png start with 0.
# 0.png, 1.png, 2.png, etc.
# Run this to generate all the asset json files. Edit metadata as needed.

with open('base-asset.json') as json_file:
    data = json.load(json_file)

    directory = os.fsencode("./assets/")

    for file in os.listdir(directory):
        filename = os.fsdecode(file)
        if filename.endswith(".png"):
            num = filename.split(".")[0]

            asset_data = data.copy()

            asset_data["name"] = "Exploding Head #{}".format(num)
            # TODO: edit description
            # TODO: add traits
            asset_data["image"] = filename
            asset_data["properties"]["files"][0]["uri"] = filename

            with open('./assets/{}.json'.format(num), 'w') as fp:
                json.dump(asset_data, fp)
