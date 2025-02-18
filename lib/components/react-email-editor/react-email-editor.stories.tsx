import type { Meta, StoryObj } from '@storybook/react';
import ReactEmailEditor from './react-email-editor';
import { fn } from '@storybook/test';

const meta = {
  title: 'Components/HtmlEditors/ReactEmailEditor',
  component: ReactEmailEditor,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    onHtmlExport: fn(),
  },
} satisfies Meta<typeof ReactEmailEditor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

export const WithData: Story = {
  args: {
    design: {
      counters: {
        u_column: 1,
        u_row: 1,
        u_content_image: 2,
        u_content_text: 1,
      },
      body: {
        id: 'l5peWxb4UU',
        rows: [
          {
            id: 'rCK2Xt55HS',
            cells: [1],
            columns: [
              {
                id: 'wi7jGebSDz',
                contents: [
                  {
                    id: 'KvP6NwcEVA',
                    type: 'text',
                    values: {
                      containerPadding: '10px',
                      anchor: '',
                      fontSize: '14px',
                      textAlign: 'left',
                      lineHeight: '140%',
                      linkStyle: {
                        inherit: true,
                        linkColor: '#0000ee',
                        linkHoverColor: '#0000ee',
                        linkUnderline: true,
                        linkHoverUnderline: true,
                      },
                      displayCondition: null,
                      _styleGuide: null,
                      _meta: {
                        htmlID: 'u_content_text_1',
                        htmlClassNames: 'u_content_text',
                      },
                      selectable: true,
                      draggable: true,
                      duplicatable: true,
                      deletable: true,
                      hideable: true,
                      text: '<p style="line-height: 140%;">Current data already <strong>loaded</strong></p>',
                      _languages: {},
                    },
                  },
                  {
                    id: 'anLTJwRaE9',
                    type: 'image',
                    values: {
                      containerPadding: '10px',
                      anchor: '',
                      src: {
                        url: 'https://cdn.tools.unlayer.com/image/placeholder.png',
                        width: 1600,
                        height: 400,
                      },
                      textAlign: 'center',
                      altText: '',
                      action: {
                        name: 'web',
                        values: {
                          href: '',
                          target: '_blank',
                        },
                      },
                      displayCondition: null,
                      _styleGuide: null,
                      _meta: {
                        htmlID: 'u_content_image_2',
                        htmlClassNames: 'u_content_image',
                      },
                      selectable: true,
                      draggable: true,
                      duplicatable: true,
                      deletable: true,
                      hideable: true,
                    },
                  },
                ],
                values: {
                  backgroundColor: '',
                  padding: '0px',
                  border: {},
                  borderRadius: '0px',
                  _meta: {
                    htmlID: 'u_column_1',
                    htmlClassNames: 'u_column',
                  },
                },
              },
            ],
            values: {
              displayCondition: null,
              columns: false,
              _styleGuide: null,
              backgroundColor: '',
              columnsBackgroundColor: '',
              backgroundImage: {
                url: '',
                fullWidth: true,
                repeat: 'no-repeat',
                size: 'custom',
                position: 'center',
                customPosition: ['50%', '50%'],
              },
              padding: '0px',
              anchor: '',
              hideDesktop: false,
              _meta: {
                htmlID: 'u_row_1',
                htmlClassNames: 'u_row',
              },
              selectable: true,
              draggable: true,
              duplicatable: true,
              deletable: true,
              hideable: true,
            },
          },
        ],
        headers: [],
        footers: [],
        values: {
          _styleGuide: null,
          popupPosition: 'center',
          popupWidth: '600px',
          popupHeight: 'auto',
          borderRadius: '10px',
          contentAlign: 'center',
          contentVerticalAlign: 'center',
          contentWidth: '500px',
          fontFamily: {
            label: 'Arial',
            value: 'arial,helvetica,sans-serif',
          },
          textColor: '#000000',
          popupBackgroundColor: '#FFFFFF',
          popupBackgroundImage: {
            url: '',
            fullWidth: true,
            repeat: 'no-repeat',
            size: 'cover',
            position: 'center',
          },
          popupOverlay_backgroundColor: 'rgba(0, 0, 0, 0.1)',
          popupCloseButton_position: 'top-right',
          popupCloseButton_backgroundColor: '#DDDDDD',
          popupCloseButton_iconColor: '#000000',
          popupCloseButton_borderRadius: '0px',
          popupCloseButton_margin: '0px',
          popupCloseButton_action: {
            name: 'close_popup',
            attrs: {
              onClick: "document.querySelector('.u-popup-container').style.display = 'none';",
            },
          },
          language: {},
          backgroundColor: '#F7F8F9',
          preheaderText: '',
          linkStyle: {
            body: true,
            linkColor: '#0000ee',
            linkHoverColor: '#0000ee',
            linkUnderline: true,
            linkHoverUnderline: true,
          },
          backgroundImage: {
            url: '',
            fullWidth: true,
            repeat: 'no-repeat',
            size: 'custom',
            position: 'center',
          },
          _meta: {
            htmlID: 'u_body',
            htmlClassNames: 'u_body',
          },
        },
      },
      schemaVersion: 18,
    },
  },
};
