import type { Meta, StoryObj } from "@storybook/react";
import QuillEditor from "./quill-editor";

const meta = {
  title: "Components/HtmlEditors/QuillEditor",
  component: QuillEditor,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof QuillEditor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

export const WithData: Story = {
  args: {
    html: "<p>Hello, world!</p>",
  },
};
