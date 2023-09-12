import json
from logging import getLogger

from crosscompute.routines.interface import Batch
from crosscompute.routines.variable import (
    Element, VariableView, load_file_text)

from ..constants import COLORIST_CSS_URI, COLORIST_JS_URI
from .assets import (
    COLOR_HTML,
    COLOR_OUTPUT_HEADER_JS,
    COLOR_OUTPUT_JS,
    QR_SELECTOR_HTML,
    QR_SELECTOR_INPUT_HEADER_JS,
    QR_SELECTOR_INPUT_JS,
)


class ColorPickerView(VariableView):
    view_name = 'color-picker'
    css_uris = [COLORIST_CSS_URI]
    css_texts = []
    js_uris = [COLORIST_JS_URI]

    def get_value(self, b: Batch, x: Element):
        variable_definition = self.variable_definition
        data = b.load_data_from(x.request_params, variable_definition)
        if 'value' in data:
            value = data['value']
        elif 'path' in data:
            value = load_file_text(data['path'])
        else: 
            value = ''
        return value

    def render_input(self, b: Batch, x: Element):
        value = self.get_value(b, x)
        variable_definition = self.variable_definition
        variable_id = self.variable_id
        data_uri = b.get_data_uri(variable_definition, x)
        # c = b.get_data_configuration(variable_definition)
        # c.get('layout', {})

        element_id = x.id
        template = COLOR_HTML
        main_text = get_html(element_id, x.mode_name, self.view_name, variable_id, template)
        js_texts = [
            COLOR_OUTPUT_HEADER_JS,
            COLOR_OUTPUT_JS.render({
                'variable_id': variable_id,
                'element_id': element_id,
                'data_uri': data_uri,
                'value': value,
                'for_print': x.layout_settings['for_print']})]
        return {
            'css_uris': self.css_uris, 'css_texts': self.css_texts,
            'js_uris': self.js_uris, 'js_texts': js_texts,
            'main_text': main_text}


class QRSelectorView(VariableView):
    view_name = 'qr-selector'
    css_uris = []
    css_texts = []
    js_uris = []

    def get_value(self, b: Batch, x: Element):
        variable_definition = self.variable_definition
        data = b.load_data_from(x.request_params, variable_definition)
        if 'value' in data:
            value = data['value']
        elif 'path' in data:
            value = load_file_text(data['path'])
        else: 
            value = ''
        return value

    def render_input(self, b: Batch, x: Element):
        value = self.get_value(b, x)
        variable_definition = self.variable_definition
        variable_id = self.variable_id
        data_uri = b.get_data_uri(variable_definition, x)
        
        element_id = x.id
        template = QR_SELECTOR_HTML
        main_text = get_html(element_id, x.mode_name, self.view_name, variable_id, template)
        js_texts = [
            QR_SELECTOR_INPUT_HEADER_JS,
            QR_SELECTOR_INPUT_JS.render({
                'variable_id': variable_id,
                'element_id': element_id,
                'data_uri': data_uri,
                'value': value,
                'for_print': x.layout_settings['for_print']})]
        return {
            'css_uris': self.css_uris, 'css_texts': self.css_texts,
            'js_uris': self.js_uris, 'js_texts': js_texts,
            'main_text': main_text}
            

def get_html(element_id, mode_name, view_name, variable_id, template):
    print(template)
    return template.substitute({
        'element_id': element_id,
        'mode_name': mode_name,
        'view_name': view_name,
        'variable_id': variable_id})