from crosscompute.routines.asset import AssetStorage

from ..constants import ASSETS_FOLDER

asset_storage = AssetStorage(ASSETS_FOLDER)

COLOR_HTML = asset_storage.load_string_text('color.html')
COLOR_OUTPUT_HEADER_JS = asset_storage.load_raw_text('color-output-header.js')
COLOR_OUTPUT_JS = asset_storage.load_jinja_text('color-output.js')

QR_SELECTOR_HTML = asset_storage.load_string_text('qr.html')
QR_SELECTOR_INPUT_HEADER_JS = asset_storage.load_raw_text('qr-input-header.js')
QR_SELECTOR_INPUT_JS = asset_storage.load_jinja_text('qr-input.js')