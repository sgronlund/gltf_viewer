#version 330
#extension GL_ARB_explicit_attrib_location : require

// Uniform constants
// ...

// Fragment shader inputs
in vec3 v_color;
// ...

// Fragment shader outputs
out vec4 frag_color;

void main()
{
    // Fetch the varying variable from the fragment shade and use it in the output
    // with this we fetch from the underlying gltf-file (i.e. in the attributes of the mesh) 
    // specifically in our shader scolors instead of setting them
    frag_color = vec4(v_color, 1.0);
}
