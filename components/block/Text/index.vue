<template>
  <template v-for="(line, i) in lines">
    <BlockTextParagraph v-if="textType(line) === 'paragraph'" :line="line" />
    <BlockTextDelimiter v-if="textType(line) === 'delimiter'" :line="line" />
    <BlockTextImage v-if="textType(line) === 'image'" :line="line" />
    <BlockTextLink v-if="textType(line) === 'link'" :line="line" />
    <BlockTextList v-if="textType(line) === 'list'" :line="line" />
    <BlockTextWork v-if="textType(line) === 'work'" :line="line" />
    <p v-if="textType(line) === 'youtube'"><OrganismVideo :video="line" /></p>
    <p v-if="textType(line) === 'soundcloud'">
      <OrganismSoundcloud :line="line" />
    </p>
  </template>
</template>
<script setup lang="ts">
import { TextLine } from "~~/types/text";

const props = defineProps<{
  lines: TextLine[];
}>();

const lines = computed(() => props.lines || []);
const textType = (line: TextLine) => {
  if (
    typeof line === "string" ||
    ["paragraph", "heading", "subheading"].includes(line.type)
  )
    return "paragraph";
  return line.type;
};
</script>
