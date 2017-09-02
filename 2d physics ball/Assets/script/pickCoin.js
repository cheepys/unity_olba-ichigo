#pragma strict

public var points:int = 5;

function OnTriggerEnter2D(other:Collider2D)
{
Debug.Log("triggered you got " + points + "points" );

Destroy(gameObject);

}
